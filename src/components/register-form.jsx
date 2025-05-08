import { cn } from "@/lib/utils";
import { Button } from "@/components/atom/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { Input } from "@/components/atom/input";
import { Label } from "@/components/atom/label";

export function RegisterForm({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className={"flex justify-center text-4xl"}>
            Inregistrare
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Parola</Label>
                </div>
                <Input id="password" type="password" required />
                <div className="flex items-center">
                  <Label htmlFor="password">Confirma parola</Label>
                </div>
                <Input id="password" type="password" required />
              </div>

              <Button type="submit" className="w-full">
                Inregistrare
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Ai deja un cont?{" "}
              <a href="/login" className="underline underline-offset-4">
                login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
