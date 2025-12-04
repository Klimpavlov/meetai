'use client';
import Image from "next/image";
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { authClient } from "@/lib/auth-client"; //import the auth client

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
      <div className='p-4 flex flex-col gap-y-4'>
        <Input placeholder="name" value={name} onChange={(e)=> setName(e.target.value)} />
        <Input placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <Input placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      <Button>Create user</Button>
      </div>
  );
}
