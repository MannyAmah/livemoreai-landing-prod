/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Users, Clock, Zap } from "lucide-react";
import MainLayout from "./layout/main-layout";

export function AboutUsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        <header className="bg-primary dark:bg-gray-800 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl dark:text-white font-bold mb-4">
              About Livemore
            </h1>
            <p className="text-xl dark:text-gray-400 max-w-2xl">
              Prevent diseases by actively monitoring your health data and
              taking action for healthier you.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="dark:text-white">
                <p className="text-lg mb-4">
                  At Livemore, We help you stay one step ahead of illness, catch
                  your health warning signs before they turn into big health
                  issues with sleepless nights and mounting medical bills. We're
                  on a mission to Normalize preventive healthcare and empower
                  individuals to take control of their well-being.
                </p>
              </div>
              <div
                className="relative h-96 md:h-full"
                style={{ height: "400px", width: "auto" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1531956656798-56686eeef3d4?q=80&w=2054&auto=format&fit=crop"
                  alt="Livemore team brainstorming"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl dark:text-white font-bold mb-8">
              The Problem We're Solving
            </h2>
            <Card className="bg-secondary">
              <CardContent className="p-6">
                <p className="text-xl font-medium text-secondary-foreground">
                  We are committed to helping you to live healthier, longer and
                  disease-free life. Instead of reactive treatment, we provide
                  you with proactive recommendations that ensure you stay
                  healthy, without chronic disease.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl dark:text-white font-bold mb-8">
              Our Approach
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "AI-Driven Insights",
                  description:
                    "Leveraging machine learning to provide personalized health recommendations.",
                },

                {
                  icon: Users,
                  title: "Community Focus",
                  description:
                    "Building a supportive community of health-conscious individuals.",
                },
                {
                  icon: Clock,
                  title: "Preventive Care",
                  description:
                    "Shifting focus from treatment to prevention through early detection.",
                },
                {
                  icon: Zap,
                  title: "Real-Time Updates",
                  description:
                    "Providing up-to-date health insights as new data becomes available.",
                },
              ].map((approach, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <approach.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {approach.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {approach.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Journey So Far</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <Badge className="mb-2">2023</Badge>
                  <h3 className="text-xl font-semibold mb-2">
                    Inception of Livemore
                  </h3>
                  <p className="text-muted-foreground">
                    Our team came together with a shared vision to revolutionize
                    preventive healthcare.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Badge className="mb-2">2024</Badge>
                  <h3 className="text-xl font-semibold mb-2">
                    MVP Development
                  </h3>
                  <p className="text-muted-foreground">
                    Intensive development and testing of our Minimum Viable
                    Product.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Badge className="mb-2">Coming Soon</Badge>
                  <h3 className="text-xl font-semibold mb-2">MVP Launch</h3>
                  <p className="text-muted-foreground">
                    We're gearing up for the exciting launch of our MVP. Stay
                    tuned!
                  </p>
                </CardContent>
              </Card>
            </div>
          </section> */}

          <section>
            <Card className="bg-primary dark:bg-muted text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="text-3xl dark:text-white font-bold mb-4">
                  Be Part of the Health Revolution
                </h2>
                <p className="text-xl dark:text-white mb-6">
                  We're looking for early adopters to join our beta testing
                  program. Help shape the future of personalized healthcare!
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link href="https://app.livemoreai.com/register">
                    Join Beta Program <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </MainLayout>
  );
}
