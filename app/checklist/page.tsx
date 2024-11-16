import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckListPage() {
  return (
    <div className="min-h-screen py-8 px-72 pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex-auto">
          Checklist
        </h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <div className="flex gap-4">
            <div>
              <Label htmlFor="reviewer">You</Label>
              <Input type="text" id="reviewer" placeholder="Your Name" />
            </div>
            <div>
              <Label htmlFor="developer">Developer</Label>
              <Input type="text" id="developer" placeholder="Developers Name" />
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
