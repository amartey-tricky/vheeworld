import Link from "next/link";
import { CreditCard, TicketCheck, TicketMinus, HeartHandshake } from "lucide-react";
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
    <main className="p-8 mx-auto max-w-screen-lg">
      <section className="grid grid-col-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <article>
          <Card className="md:h-[270px]">
            <CardHeader>
              <CardTitle>
                <CreditCard />
              </CardTitle>
              <CardDescription>
                Donate Securely using Mobile money or Bank Card
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                You can donate directly on this website using Mobile Money from
                any network or using your Bank Card
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/donate"
                className="underline text-blue-400 hover:text-blue-700 pt-6"
              >
                Click here to donate
              </Link>
            </CardFooter>
          </Card>
        </article>
        <article>
          <Card>
            <CardHeader>
              <CardTitle>
                <TicketCheck />
              </CardTitle>
              <CardDescription>Donate by Bank Transfer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                You can donate by directly transferring money from your account
                into our accounts.
              </p>
            </CardContent>
            <CardFooter>
              <span>
                VheeWorld Foundation<br/>Acc no : 1441002243983<br/>Ecobank spintex
                branch
              </span>
            </CardFooter>
          </Card>
        </article>
        <article>
          <Card>
            <CardHeader>
              <CardTitle><TicketMinus /></CardTitle>
              <CardDescription>Donate by Cheque</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">You can donate by writing a cheque addressed to the foundation and contacting us to pick it up and sending it to us.</p>
            </CardContent>
            <CardFooter>
            <span>
                VheeWorld Foundation<br/>Acc no : 1441002243983<br/>Ecobank spintex
                branch
              </span>
            </CardFooter>
          </Card>
        </article>
        <article>
          <Card className="h-[292px]">
            <CardHeader>
              <CardTitle><HeartHandshake /></CardTitle>
              <CardDescription>Donating in Kind</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">We embark on annual projects and your donations facilitate the projects.</p>
            </CardContent>
            <CardFooter>
              <p className="text-justify">If you have any donations just call us or email us</p>
            </CardFooter>
          </Card>
        </article>
      </section>
    </main>
  );
}
