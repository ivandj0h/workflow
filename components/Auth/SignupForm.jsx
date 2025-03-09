"use client";

import { signupSchema } from "@/schema/validationSchema";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleButton from "@/components/Buttons/GoogleButton";
import GithubButton from "@/components/Buttons/GithubButton";
import Separator from "@/components/Common/Separator";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/Form/CustomFormField";

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

  const onSubmit = async values => {
    console.log('Form values : ', values)
  }

  return <div className="grid w-full items-center gap-4">
    <div className="flex items-center gap-3.5">
      <GoogleButton text='Signup with Google' />
      <GithubButton text='Signup with Github' />
    </div>
    <Separator />

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          <CustomFormField 
            control={form.control}
            name={'name'}
            label={'Name'}
            placeholder={'Full Name'}
          />
        </div>
      </form>
    </Form>
  </div>;
};

export default SignupForm;
