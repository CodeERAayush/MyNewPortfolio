import React from "react";
import {
  ExternalLink,
  GanttChart,
  GithubIcon,
  Key,
  Link2Icon,
  Laptop2Icon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { experienceData } from "./Experience-content";

type ProjectCardProps = experienceData;

const ExperienceCard = ({
  title,
  header,
  description,
  tags,
  link,
}: ProjectCardProps) => {
  return (
    <Card className="md:max-w-screen-xl md:mx-auto rounded-none bg-transparent border-black rounded-xl shadow-none mt-8 shadow-xl p-5 shadow-black">
      <div className="lg:col-span-6">
        <CardHeader className="flex">
          <CardTitle className="flex items-center justify-between">
            <div className="flex text-xl md:text-2xl items-center">
              <Laptop2Icon className="mr-2" /> {title}
            </div>

            <div className="flex gap-2">
            

              {link.live && (
                <Link
                  href={link.live}
                  target="_blank"
                  className="hover:text-blue-500 transition-all"
                >
                  <Link2Icon className="h-5 w-5" />
                </Link>
              )}
            </div>
          </CardTitle>

          <CardDescription className="">{header}</CardDescription>
        </CardHeader>
        <CardContent>
{        
                      description.map((descr)=><div className="text-neutral-500 font-medium text-left">✅ {descr}</div>)
}
        </CardContent>

        <CardFooter>
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag, index) => (
              <div
                className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ExperienceCard;
