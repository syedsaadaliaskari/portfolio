"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "../Schemas/ContactSchema";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        console.error("Failed to send email:", result.error);
      }

      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="min-h-screen py-15 px-4 ">
      <div className="text-4xl md:5xl font-bold mb-4 text-center">
        Contact Me
      </div>

      <p className="text-xl text-gray-300 ">
        Contact me via{" "}
        <a
          href="mailto:syedsaadaliaskari@gmail.com"
          className="text-gray-500 hover:text-blue-400 underline"
        >
          syedsaadaliaskari@gmail.com
        </a>
        {""}
        or contact me through this form.
      </p>

      <div className="bg-[#1e1b4b]/90 rounded-lg p-6 mt-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your-email@gmail.com"
                      {...field}
                      className="text-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="How can I help you?"
                      className="resize-none text-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    Write a brief description of your inquiry.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-20 py-5 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="animate-spin" /> : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
