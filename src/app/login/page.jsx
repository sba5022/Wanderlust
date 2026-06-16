'use client'
import { authClient } from "@/lib/auth-client"
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Input, Label, TextField, Form, Card, Separator } from '@heroui/react';
import { redirect } from "next/dist/server/api-utils";
import React from "react";


const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // Convert FormData to plain object
        const user = Object.fromEntries(formData.entries())
        console.log(user)
        const { data, error } = await authClient.signIn.email({
          
            email: user.email, // required
            password: user.password, // required
           

        });

        console.log({ data, error })
    };

const handleGoogleSignIn = async() => {
await authClient.signIn.social({
    provider: "google",

})

}

    return (
        <div className="max-w-7xl mx-auto mt-5 mb-5">
            <div className="text-center font-bold">
                <h1>Login Account</h1>
            </div>
            <Card className="border ">
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit} >
                   
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                  
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex justify-center gap-2">
                        <Button type="submit">
                            <Check />
                          Login
                        </Button>

                    </div>
                </Form>
                  <Separator/>
                                <p className="text-center">Or Login with </p>
                                  <Separator/>
                                <div>
                                    <button onClick={handleGoogleSignIn} className="btn btn-accent w-full ">
                                        Login with Google
                                      
                                    </button>
                                </div>
            </Card>
        </div>
    );
};

export default LoginPage;