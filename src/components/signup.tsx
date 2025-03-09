/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MainLayout from "./layout/main-layout";
import { Building2, FlaskRound, Stethoscope, User } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <MainLayout>
      <div className="min-h-screen p-4 md:p-6 lg:p-8">
        <Card className="mx-auto max-w-2xl dark:bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Choose Your Path
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Select the type of account that best describes you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "User",
                  icon: User,
                  href: "https://app.livemoreai.com/register?account=member",
                  description: "Register as an individual user",
                  detail:
                    "Access personalized healthcare services and manage your health",
                  gradient: "from-blue-500 to-cyan-400",
                },

                {
                  title: "Healthcare Providers",
                  icon: Stethoscope,
                  href: "https://app.livemoreai.com/register?account=doctor",
                  description: "Register as a healthcare",
                  detail:
                    "Offer your medical expertise and connect with patients",
                  gradient: "from-blue-500 to-cyan-400",
                },
              ].map((item) => (
                <Link key={item.title} href={item.href}>
                  <Card className="group relative overflow-hidden border-0 bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    {/* Gradient border */}
                    <div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ padding: "1px" }}
                    >
                      <div className="h-full w-full rounded-lg bg-card" />
                    </div>

                    <CardHeader className="relative space-y-4 pb-4">
                      <div
                        className={`inline-flex rounded-full bg-gradient-to-r ${item.gradient} p-3 w-10 h-10`}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        Get Started
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
