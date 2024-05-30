import Popover from "@/components/Popover";
import { ShowCase } from "@/components/ShowCase";
import Test from "@/components/Test";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextAnimate } from "@/components/ui/text-animate"


export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <div className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/",
      icon: <div className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/",
      icon: <div className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <main className="bg-slate-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-screen-sm lg:max-w-7xl bg-white/50 backdrop-blur-sm h-[400px] rounded-2xl mt-24 flex flex-col items-center justify-center">
        <TextAnimate text="Mama Louisa" type="popIn" className="text-[50px] font-bold text-neutral-600 tracking-widest"/>
      </div>
      <ShowCase />
      <Test />
      <Test />
      <Test />
      <div className="relative w-full">
        <FloatingNav navItems={navItems} />
      </div>
    </main>
  );
}
