"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "../Schemas/ContactSchema";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
    setIsLoading(true);
    setSuccess(false);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        console.error("Failed to send email:", result.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-10 space-y-3">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-1">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Reach me directly at{" "}
            <a
              href="mailto:syedsaadaliaskari@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
            >
              syedsaadaliaskari@gmail.com
            </a>{" "}
            or fill out the form below.
          </p>
        </div>

        <div className="w-full bg-[#1e1b4b]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl shadow-indigo-950/40 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
            <div className="size-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <Mail size={15} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-200">
                Send a message
              </p>
              <p className="text-xs text-gray-500">
                I typically reply within 24 hours
              </p>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-sm">
                      Your email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your-email@gmail.com"
                        {...field}
                        className="bg-gray-900/60 border-gray-700/60 text-gray-200 placeholder:text-gray-600 focus:border-indigo-500 focus-visible:ring-indigo-500/20 h-10"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300 text-sm">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project, idea, or inquiry..."
                        className="resize-none bg-gray-900/60 border-gray-700/60 text-gray-200 placeholder:text-gray-600 focus:border-indigo-500 focus-visible:ring-indigo-500/20 min-h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {success && (
                <div className="flex items-center gap-2 text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                  <CheckCircle2 size={15} className="shrink-0" />
                  <span>Message sent! I will get back to you soon.</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-medium"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={15} className="animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={15} />
                    Send message
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          Your message is sent directly to my inbox. No spam, ever.
        </p>
      </div>
    </section>
  );
}
