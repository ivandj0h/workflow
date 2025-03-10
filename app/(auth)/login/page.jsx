import React from "react";
import LoginForm from "@/components/Auth/LoginForm";
import { ModeToggle } from "@/components/ThemeSwitcher";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="fixed top-5 right-5">
        <ModeToggle />
      </div>

      <Card className="w-full rounded-lg shadow border border-input md:mt-0 sm:max-w-[32rem] xl:p-0">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>
            Let's get started. No credit card needed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;
