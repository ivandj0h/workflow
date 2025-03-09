"use client";

import { signupSchema } from "@/schema/validationSchema";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleButton from "@/components/Buttons/GoogleButton";

const SignupForm = () => {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return <div className="grid w-full items-center gap-4">
    <div className="flex items-center gap-3.5">
      <GoogleButton text='Signup with Google' />
    </div>
  </div>;
};

export default SignupForm;
