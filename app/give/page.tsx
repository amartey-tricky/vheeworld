import { CreditCard } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Page() {
  return (
    <main className="flex flex-col items-center max-w-lg mx-auto p-8 gap-4 md:p-16 md:gap-8">
      <section className="">
        <article>
          <Card>
            <CardHeader>
              <CardTitle>
                <CreditCard />
              </CardTitle>
              <CardDescription>Donate Securely using Mobile money or Bank Card</CardDescription>
            </CardHeader>
            <CardContent>
              <p>You can donate directly on this website using Mobile Money from any network or using your Bank Card</p>
            </CardContent>
          </Card>
        </article>
        <article className="rounded-xl max-w-screen-md mt-4 border">
          <div className="flex flex-row gap-8 p-8 md:flex-col items-center">
            <CreditCard />
            <h1 className="text-center text-slate-600">Donate Securely using Mobile money or Bank Card</h1>
          </div>
          <div className="p-6">
            <p>You can donate directly on this website using Mobile Money from any network or using your Bank Card</p>
          </div>
        </article>
      </section>
    </main>
  );
}