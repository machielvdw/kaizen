"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen py-8 px-72 pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl flex-auto">
          Kaizen
        </h1>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          (Japanese: 改善, &quot;improvement&quot;) is a concept referring to
          business activities that continuously improve all functions and
          involve all employees from the CEO to the assembly line workers.
        </blockquote>
        <h2 className="mt-6 border-b pb-2 text-3xl font-semibold tracking-tight">
          Background: Understanding the Key Areas of Effective Engineering
        </h2>
        <p className="leading-7 mt-2">
          The best engineers consistently excel in four areas:{" "}
          <i>
            technical development practices, organizational awareness, strategic
            collaboration, and leadership and accountability
          </i>
          . These categories encompass both technical habits and interpersonal
          skills that amplify impact in any organization. Below is an overview
          of each area and its key components.
        </p>
        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          1. Code Quality and Development Practices
        </h3>
        <p className="leading-7 mt-2">
          This area focuses on writing code that is not only functional but also
          maintainable, readable, and aligned with team standards. Great
          engineers prioritize producing code that other engineers can work with
          easily, reducing friction and increasing productivity across the team.
        </p>
        <ul className="my-6 ml-6 list-disc mt-2">
          <li>
            <strong>Code for Humans</strong>: Code isn’t just for machines; it’s
            for the teammates who will read, maintain, and extend it.
            Prioritizing readability and clarity ensures code is accessible and
            valuable for everyone involved, from developers to end-users.
          </li>
          <li>
            <strong>Detached from Code</strong>: Highly effective engineers view
            code as a means to an end, rather than a personal product. They are
            open to feedback and will revise or scrap code if it benefits the
            project’s overall outcome, focusing on delivery rather than
            attachment to any single piece of code.
          </li>
          <li>
            <strong>Consistent Standards</strong>: Consistency in coding styles
            and standards creates a shared language for teams, making codebases
            easier to navigate and maintain. This fosters scalability within the
            codebase and team, essential as projects and teams grow.
          </li>
          <li>
            <strong>Simple and Predictable Code</strong>: The best engineers
            write code that’s simple to read and understand, even if it was
            complex to create. They keep code logical, predictable, and free of
            surprises, making it easier to debug and extend.
          </li>
          <li>
            <strong>Adequate Testing</strong>: Testing is fundamental to
            reliability. Effective engineers prioritize tests that clarify code
            functionality and identify issues early, ensuring the code is both
            stable and predictable. They know what to test—and equally
            important, what not to over-test—focusing on valuable,
            outcome-driven testing.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-4">
          2. Organizational Awareness and Navigation
        </h3>
        <p className="leading-7 mt-2">
          Beyond technical prowess, effective engineers understand the broader
          organizational context they operate within. They are adept at
          navigating company structures, understanding workplace dynamics, and
          leveraging these insights to work more effectively.
        </p>
        <ul className="my-6 ml-6 list-disc mt-2">
          <li>
            <strong>Understand Organizational Structure</strong>: Knowing how
            your organization operates, from leadership to team dynamics, helps
            you tailor your work to align with organizational goals, making it
            more impactful and visible.
          </li>
          <li>
            <strong>Soft Skills as Hard Skills</strong>: Often underestimated,
            soft skills—such as clear communication, conflict resolution, and
            prioritizing work—are crucial in navigating workplace challenges and
            securing project buy-in from stakeholders.
          </li>
          <li>
            <strong>Implicit Hierarchies</strong>: Every organization has an
            unofficial structure, often based on influence, tenure, or subject
            matter expertise. Recognizing and understanding this hierarchy
            allows you to work more effectively within it, gaining support and
            feedback from influential team members.
          </li>
          <li>
            <strong>Cultural Awareness</strong>: Recognizing whether your
            organization operates with a top-down, bottom-up, or mixed
            decision-making culture can help you pitch ideas more effectively,
            knowing how and to whom to appeal for the best results.
          </li>
          <li>
            <strong>Embrace Messiness</strong>: Codebases and organizations can
            be “messy,” with legacy issues, technical debt, or conflicting
            goals. Effective engineers adapt to these realities, working
            efficiently within constraints rather than resisting them.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-4">
          3. Strategic and Collaborative Skills
        </h3>
        <p className="leading-7 mt-2">
          The most effective engineers recognize that code is only one part of
          the equation. They build trust and credibility within their teams,
          seek input, communicate their achievements, and work collaboratively
          to push projects forward.
        </p>
        <ul className="my-6 ml-6 list-disc mt-2">
          <li>
            <strong>Seek Small Wins</strong>: Building credibility through
            small, impactful wins helps you establish a reputation for
            reliability. By showing results early on, you can gradually gain
            support for larger initiatives.
          </li>
          <li>
            <strong>Constructive Communication</strong>: Open, collaborative
            communication is vital for achieving high-quality results. Effective
            engineers actively seek feedback on their designs and code, valuing
            diverse perspectives to improve their work.
          </li>
          <li>
            <strong>Balance Speed with Care</strong>: Great engineers know that
            the best path to efficient delivery is often slower at first. They
            take the time to use coding standards, test thoughtfully, and
            communicate thoroughly, ultimately saving time and reducing
            setbacks.
          </li>
          <li>
            <strong>Adaptability and Rule-Breaking</strong>: Guidelines and
            principles are essential but not always absolute. The best engineers
            know when to adapt or break these rules if a situation demands it,
            documenting their reasoning for future clarity and learning.
          </li>
          <li>
            <strong>Continual Self-Marketing</strong>: Effective engineers make
            sure their work and achievements are visible to those around them,
            ensuring colleagues and stakeholders are aware of their
            contributions and expertise. This helps them gain support for future
            projects and maintain momentum in their careers.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight mt-4">
          4. Leadership and Accountability
        </h3>
        <p className="leading-7 mt-2">
          Effective engineers not only excel in their individual contributions
          but also demonstrate leadership and take accountability for their work
          and its impact on the team and organization. They influence others
          positively, foster a culture of trust and responsibility, and drive
          projects forward through proactive engagement.
        </p>
        <ul className="my-6 ml-6 list-disc mt-2">
          <li>
            <strong>Ownership of Work</strong>: Taking full responsibility for
            one&apos;s tasks and their outcomes is a hallmark of an effective
            engineer. They acknowledge successes and failures alike, learn from
            mistakes, and are committed to seeing projects through to
            completion.
          </li>
          <li>
            <strong>Mentoring and Supporting Others</strong>: Effective
            engineers invest in the growth of their teammates. They share
            knowledge, provide guidance, and help others overcome challenges,
            fostering a collaborative and high-performing team environment.
          </li>
          <li>
            <strong>Proactive Decision-Making</strong>: Leaders anticipate
            challenges and address them before they become issues. They make
            informed decisions, consider the broader impact on the project and
            team, and are willing to take calculated risks when necessary.
          </li>
          <li>
            <strong>Transparency and Communication</strong>: Openly
            communicating progress, setbacks, and changes builds trust within
            the team and with stakeholders. Effective engineers are honest about
            challenges and work collaboratively to find solutions.
          </li>
          <li>
            <strong>Continuous Improvement</strong>: Leaders are committed to
            personal and team growth. They seek feedback, reflect on
            experiences, and implement changes to improve processes, skills, and
            team dynamics.
          </li>
        </ul>
        <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight mt-8">
          Next Steps
        </h2>
        <p className="leading-7 mt-2">
          The following checklist can help assess the your engineer&apos;s
          current habits and identify areas for improvement. The results are a
          reflection of the individual, the environment, and the company as a
          whole.{" "}
        </p>
        <motion.div
          className="w-full mt-6"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button asChild className="w-full mt-6">
            <Link href="/checklist">Get Started with the Checklist</Link>
          </Button>
        </motion.div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
