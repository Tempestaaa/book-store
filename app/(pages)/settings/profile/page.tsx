import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  return (
    <div className="h-full flex flex-col">
      <h4>Profile preferences</h4>

      <div className="flex mt-8 flex-1 gap-8">
        <div className="w-72 flex flex-col gap-4">
          <Avatar className="size-24 mx-auto">
            <AvatarImage src="/images/user-profile.jpg" alt="User's profile" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>

          <div className="text-center">
            <p>Username</p>
            <small className="text-sub">abcxyz@test.com</small>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <h6>My account</h6>

          <div className="w-1/2 flex flex-col gap-4">
            <label className="">
              <p className="font-heading">Username</p>
              <Input
                placeholder="Username"
                className="px-0 rounded-none border-b-2 border-muted focus-visible:border-foreground"
              />
            </label>

            <label className="">
              <p className="font-heading">Email</p>
              <Input
                placeholder="abcxyz@test.com"
                className="px-0 rounded-none border-b-2 border-muted focus-visible:border-foreground"
              />
            </label>

            <label className="">
              <p className="font-heading">Address</p>
              <textarea
                rows={6}
                placeholder="742 Evergreen Terrace, Springfield, IL 62704"
                className="resize-none focus-visible:outline-0 border-b-2 border-muted focus-visible:border-foreground w-full placeholder:font-heading mt-2"
              />
            </label>

            <Button variant="negative" className="w-24 rounded-full ml-auto">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
