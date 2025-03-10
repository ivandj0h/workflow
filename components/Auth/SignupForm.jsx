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
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignupForm = () => {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    console.log("Form values : ", values);
  };

  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex items-center gap-3.5">
        <GoogleButton text="Signup with Google" />
        <GithubButton text="Signup with Github" />
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <CustomFormField
              control={form.control}
              name={"name"}
              label={"Name"}
              placeholder={"Full Name"}
            />
            <CustomFormField
              control={form.control}
              name={"email"}
              label={"Email"}
              type="email"
              placeholder={"Email Address"}
            />
            <CustomFormField
              control={form.control}
              name={"password"}
              label={"Password"}
              type="password"
              placeholder={"Password"}
            />
          </div>
          <Button variant="primary" className="mt-5 w-full" disabled={loading}>
            {loading ? "Creating Account..." : "Create an Account"}
          </Button>
        </form>
      </Form>

      <p className="text-sm font-light text-muted-foreground">
        Already have an Account?{" "}
        <Link
          href={"/login"}
          className="font-medium text-blue-600 hover:underline ml-1"
        >
          Login here
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
