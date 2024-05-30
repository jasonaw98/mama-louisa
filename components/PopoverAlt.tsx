import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const PopoverAlt = ({ trigger, children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="bg-white !rounded-2xl">{children}</DialogContent>
    </Dialog>
  );
};

export default PopoverAlt;
