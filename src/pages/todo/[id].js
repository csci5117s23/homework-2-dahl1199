import ToDoItem from '@/components/ToDoItem'
import { useState, useEffect } from "react"
import Head from 'next/head'
import { useRouter } from "next/router";
import { useAuth } from "@clerk/nextjs";
import { updateTodo, getTodoItemById } from "@/modules/Data";

export default function Todo() {
    const router = useRouter();
    const {id} = router.query;

    const [todo, setTodo] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    useEffect(() => {
      async function process() {
        if (userId) {
          const token = await getToken({ template: "codehooks" });
          setTodo(await getTodoItemById(token, id));
          setLoading(false);
        }
      }
      process();
    }, [isLoaded]);



    if (loading) {
      return <span> loading... </span>;
      } else {
        return <>
          <ToDoItem key={id} todo={todo[0]}/>
        </>
      }
  }