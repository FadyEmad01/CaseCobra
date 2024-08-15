import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "./ui/skeleton";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  const isAdin = user?.email === process.env.ADMIN_EMAIL;
  const userName = user?.given_name;
  // const userImage = user?.picture ?? "https://i.pinimg.com/564x/f5/13/10/f513106362f50dd1591b1259b748e516.jpg";
  // if (user?.picture != "https://gravatar.com/avatar/59eaa86063d87df30e4d86febe33b015e6bf72310e8f5c92fec9a454a464946a?d=blank&size=200") {
  //   const userImage = user?.picture;
  // }
  // else{
  //   const userImage = "https://i.pinimg.com/564x/f5/13/10/f513106362f50dd1591b1259b748e516.jpg";
  // }
  // let userImage = "https://i.pinimg.com/564x/f5/13/10/f513106362f50dd1591b1259b748e516.jpg"; // Default image
  let userImage = user?.picture;
  const gravatarBaseUrl = "https://gravatar.com/avatar/";
  if (user?.picture?.startsWith(gravatarBaseUrl)) {
    //  userImage = userImage?.replace("d=blank", "d=retro");
    userImage =
      "https://i.pinimg.com/564x/f5/13/10/f513106362f50dd1591b1259b748e516.jpg";
  }

  // if (user?.picture && user.picture !== "https://gravatar.com/avatar/59eaa86063d87df30e4d86febe33b015e6bf72310e8f5c92fec9a454a464946a?d=blank&size=200") {
  //   userImage = user.picture; // Use user's picture if it is not the specific URL
  // }

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Case<span className="text-green-600">Cobra</span>
          </Link>
          <div className="h-full flex items-center space-x-3">
            {user ? (
              <>
                <AlertDialog>
                  <AlertDialogTrigger
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className:"leading-none",
                    })}
                  >
                    Sign out
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>
                        <Link href="/api/auth/logout">Continue</Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {/* <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sign out
                </Link> */}
                {isAdin ? (
                  <Link
                    href="/api/auth/logout"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className:"leading-none",
                    })}
                  >
                    Dashborad ✨
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    variant: "default",
                    size: "sm",
                    className: " hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case{" "}
                  <ChevronRight className="ml-1.5 aspect-square w-5" />
                </Link>

                <Avatar className="size-9">
                  <AvatarImage
                    src={userImage as string}
                    alt={userName + " " + user.family_name! + " image"}
                    title={userName + " " + user.family_name! + " image"}
                  />
                  <AvatarFallback><Skeleton className="size-9 rounded-full bg-zinc-400"/></AvatarFallback>
                  {/* <AvatarFallback>{userName}</AvatarFallback> */}
                </Avatar>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className:"leading-none",
                  })}
                >
                  Sign up
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className:"leading-none",
                  })}
                >
                  Login{" "}
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    variant: "default",
                    size: "sm",
                    className: " hidden sm:flex items-center gap-1 leading-none",
                  })}
                >
                  Create case{" "}
                  <ChevronRight className="ml-1.5 aspect-square w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
