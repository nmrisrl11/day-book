"use client"

import { compareAsc, differenceInDays, differenceInYears, format } from 'date-fns'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDaysIcon, ListIcon, X, XIcon } from 'lucide-react'
import React, { useState } from 'react'

const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

interface AvatarProps {
    name: string; 
    size?: string 
}

const Avatar: React.FC<AvatarProps> = ({ name, size = "w-8 h-8" }) => (
    <motion.img
        src={`https://api.dicebear.com/9.x/dylan/svg?seed=${name}`}
        alt={name}
        className={`${size} shrink-0`}
        style={{ borderRadius: 999 }}
    />
);

interface DataProps {
    name: string;
    birthdate: Date;
}

const data: DataProps[] = [
    { name: "Nanay Hilda", birthdate: new Date("2000-01-10") },
    { name: "Tatay Mundo", birthdate: new Date("2000-01-28") },
    { name: "Tatay Tiwa", birthdate: new Date("2000-02-05") },
    
    { name: "Tita Mylene", birthdate: new Date("2000-02-22") },
    { name: "Norielyn", birthdate: new Date("2000-03-03") },
    { name: "Kesh", birthdate: new Date("2000-03-20") },
    { name: "Nomer", birthdate: new Date("2000-03-30") },
    { name: "Alyssa", birthdate: new Date("2000-04-07") },
    { name: "Hailey", birthdate: new Date("2000-04-21") },
    { name: "Erica", birthdate: new Date("2000-05-01") },
    { name: "Eugene", birthdate: new Date("2000-05-16") },
    
    { name: "Tita Wenang", birthdate: new Date("2000-05-30") },
    { name: "Tito Popoy", birthdate: new Date("2000-06-09") },
    { name: "Benben", birthdate: new Date("2000-06-22") },
    { name: "Andrea", birthdate: new Date("2000-07-03") },
    { name: "Arvin", birthdate: new Date("2000-07-17") },
    
    { name: "Tita Neggy", birthdate: new Date("2000-07-29") },
    { name: "Tito Alex", birthdate: new Date("2000-08-08") },
    { name: "Sandra", birthdate: new Date("2000-08-19") },
    { name: "Aljon", birthdate: new Date("2000-09-01") },
    { name: "Angel", birthdate: new Date("2000-09-15") },
    
    { name: "Tita Editha", birthdate: new Date("2000-09-30") },
    { name: "Tito Ayo", birthdate: new Date("2000-10-09") },
    { name: "Edmar", birthdate: new Date("2000-10-21") },
    { name: "Khate", birthdate: new Date("2000-10-30") },
    { name: "Akia", birthdate: new Date("2000-11-07") },
    { name: "Celo", birthdate: new Date("2000-11-15") },
    { name: "Jaz", birthdate: new Date("2000-11-21") },
    { name: "Jace", birthdate: new Date("2000-11-26") },
    { name: "Marie", birthdate: new Date("2000-12-01") },
    { name: "Elias", birthdate: new Date("2000-12-05") },
    
    { name: "Tito Boy", birthdate: new Date("2000-12-09") },
    { name: "Tita Beccang", birthdate: new Date("2000-12-12") },
    { name: "Russel", birthdate: new Date("2000-12-15") },
    { name: "Ruan", birthdate: new Date("2000-12-18") },
    { name: "Reyann", birthdate: new Date("2000-12-20") },
    { name: "Raven", birthdate: new Date("2000-12-22") },
    { name: "RC", birthdate: new Date("2000-12-24") },
    { name: "Riri", birthdate: new Date("2000-12-26") },
    
    { name: "Tita Mavec", birthdate: new Date("2000-12-27") },
    { name: "Tito Jonas", birthdate: new Date("2000-12-28") },
    { name: "Jheremy", birthdate: new Date("2000-12-29") },
    { name: "Jurish", birthdate: new Date("2000-12-30") },
    { name: "Jade", birthdate: new Date("2000-12-31") }    
];

const Birthdays = () => {
    const [showDetailedView, setShowDetailedView] = useState(true);
    const [activeItem, setActiveItem] = useState<DataProps | null>(null);
  
    const birthdaysByMonth = data.reduce((acc, person) => {
      const month = format(person.birthdate, "MMM").toUpperCase();
      if (!acc[month]) acc[month] = [];
      acc[month].push(person);
      return acc;
    }, {} as Record<string, DataProps[]>);
  
    const today = new Date();

    const upcomingBirthdays = data
        .map((person) => {
            const nextBirthday = new Date(
                today.getFullYear(),
                person.birthdate.getMonth(),
                person.birthdate.getDate()
            );

            if (compareAsc(nextBirthday, today) < 0) {
                nextBirthday.setFullYear(today.getFullYear() + 1);
            }

            const daysUntilBirthday = differenceInDays(nextBirthday, today);
            return { ...person, nextBirthday, daysUntilBirthday };
        })
        .sort((a, b) => a.daysUntilBirthday - b.daysUntilBirthday)
        .slice(0, 4);
    
    const TITLE = "Birthdays"
    const YEAR = new Date().getFullYear()

    const BirthMonths = () => {
        return (
            <motion.div
                className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar"
                style={{ height: 320 }}
            >
                {months.map((month) => (
                    <div
                        key={month}
                        className="flex flex-col items-start gap-1 shrink-0"
                    >
                        <motion.span
                            className="text-white/50 text-sm font-semibold w-9"
                            layoutId={`month-${month}`}
                        >
                            {month}
                        </motion.span>
    
                        <div className="flex items-center justify-start -space-x-2">
                            {data
                                .filter((person) =>
                                    format(person.birthdate, "MMM").toUpperCase() === month
                                )
                                .slice(0, 3)
                                .map((person, index) => (
                                    <motion.div
                                        key={`${month}-${index}-${person.name}`}
                                        className="flex items-center justify-center shrink-0"
                                        layoutId={`avatar-${person.name}`}
                                    >
                                        <Avatar key={index} name={person.name} />
                                    </motion.div>
                                ))
                            }
    
                            {birthdaysByMonth[month].length > 3 && (
                                <motion.div
                                    className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-xs text-white"
                                    layoutId={`avatar-${month}-more`}
                                >
                                    +{birthdaysByMonth[month].length - 3}
                                </motion.div>
                            )}
                        </div>
                    </div>
                ))}
            </motion.div>
        )
    }

    return (
        <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10 z-40">
            <div className="p-6 rounded-2xl max-w-lg w-full flex flex-col items-center justify-start">
                <motion.div
                    layout
                    className="w-full flex justify-between items-center mb-6"
                >
                    <h1 className="text-2xl font-black">
                        <AnimatePresence mode="wait">
                            {showDetailedView ? (
                                <motion.span
                                    key={TITLE}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {TITLE}
                                </motion.span>
                            ) : (
                                <motion.span
                                    key={YEAR}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {YEAR}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </h1>

                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            setShowDetailedView(!showDetailedView);
                            setActiveItem(null)
                        }}
                    >
                        {showDetailedView ? <CalendarDaysIcon /> : <ListIcon />}
                    </div>
                </motion.div>

                <motion.div
                    className={`w-full relative ${showDetailedView ? "" : "overflow-hidden"}`}
                    style={{ height: showDetailedView ? 408 : 320 }}
                    layout
                >
                    <BirthMonths />
                    
                    <AnimatePresence>
                        {!showDetailedView ? (
                            <div className="absolute inset-0 w-full z-10 flex items-center justify-center bg-background/50 backdrop-blur-lg px-3 rounded-2xl border">
                                <motion.div
                                    key="grid"
                                    className="w-full grid grid-cols-3 gap-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {months.map((month) => (
                                        <motion.div className="flex flex-col" key={month}>
                                            <motion.span
                                                className="text-white/50 font-semibold text-sm mb-1 w-9"
                                                layoutId={`month-${month}`}
                                            >
                                                {month}
                                            </motion.span>

                                            <div className="flex items-center justify-start -space-x-2">
                                                {birthdaysByMonth[month]
                                                .slice(0, 3)
                                                .map((person, index) => (
                                                    <motion.div
                                                        key={`${month}-${index}-${person.name}`}
                                                        className="flex items-center justify-center"
                                                        layoutId={`avatar-${person.name}`}
                                                    >
                                                        <Avatar name={person.name} />
                                                    </motion.div>
                                                ))}

                                                {birthdaysByMonth[month].length > 3 && (
                                                    <motion.div
                                                        className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-xs text-white"
                                                        layoutId={`avatar-${month}-more`}
                                                    >
                                                        +{birthdaysByMonth[month].length - 3}
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        ) : (
                            <React.Fragment>
                                <AnimatePresence>
                                    {activeItem && (
                                        <div className="absolute inset-0 top-2 w-full h-full flex items-center justify-center z-40">
                                            <motion.div
                                                className="w-full"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                <motion.div
                                                    className="w-full flex flex-col top-12 items-center justify-center space-x-3 bg-background/50 backdrop-blur-lg p-3 pr-4 mb-2 relative border drop-shadow-2xl"
                                                    style={{ borderRadius: 40, height: 320 }}
                                                    layoutId={`avatar-${activeItem.name}-detailed`}
                                                >
                                                    <motion.button
                                                        className="absolute right-4 top-4 cursor-pointer"
                                                        onClick={() => setActiveItem(null)}
                                                        layout
                                                    >
                                                        <XIcon className="text-white" />
                                                    </motion.button>

                                                    <motion.div
                                                        className=""
                                                        layoutId={`avatar-${activeItem.name}-detailed-avatar`}
                                                    >
                                                        <Avatar name={activeItem.name} size="w-20 h-20" />
                                                    </motion.div>

                                                    <motion.div
                                                        className="w-full flex flex-col items-center my-3"
                                                        layoutId={`avatar-${activeItem.name}-detailed-2`}
                                                    >
                                                        <motion.h3
                                                            className="text-white font-semibold"
                                                            layoutId={`name-${activeItem.name}`}
                                                        >
                                                            {activeItem.name}
                                                        </motion.h3>

                                                        <motion.p
                                                            className="text-zinc-400 text-sm"
                                                            layoutId={`birthdate-${activeItem.name}`}
                                                        >
                                                            {format(activeItem.birthdate, "MMMM d")}
                                                        </motion.p>
                                                    </motion.div>
                                                
                                                    <motion.span
                                                        className="text-white font-bold"
                                                        layoutId={`age-${activeItem.name}`}
                                                    >
                                                        {differenceInYears(
                                                            new Date(),
                                                            activeItem.birthdate
                                                        )}{" "}
                                                        years old
                                                    </motion.span>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    )}
                                </AnimatePresence>

                                <motion.div
                                    className="w-full absolute top-14"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    layout
                                >
                                    <motion.h2
                                        layout
                                        className="text-white/50 uppercase text-sm font-semibold mt-4 mb-3"
                                    >
                                        Upcoming
                                    </motion.h2>

                                    {upcomingBirthdays.map((person, index) => {
                                        const age = differenceInYears(new Date(), person.birthdate);
                                        
                                        return (
                                            <motion.div
                                                className="w-full"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                key={person.name}
                                            >
                                                <motion.div
                                                    className="w-full flex items-center space-x-3 bg-zinc-900 p-3 pr-4 mb-2 cursor-pointer"
                                                    onClick={() => setActiveItem(person)}
                                                    style={{ borderRadius: 40 }}
                                                    layoutId={`avatar-${person.name}-detailed`}
                                                >
                                                    <motion.div
                                                        className=""
                                                        layoutId={`avatar-${person.name}-detailed-avatar`}
                                                    >
                                                        <Avatar name={person.name} size="w-10 h-10" />
                                                    </motion.div>

                                                    <motion.div
                                                        className="flex-grow"
                                                        layoutId={`avatar-${person.name}-detailed-2`}
                                                    >
                                                        <motion.h3
                                                            className="text-white font-semibold w-fit"
                                                            layoutId={`name-${person.name}`}
                                                        >
                                                            {person.name}
                                                        </motion.h3>

                                                        <motion.p
                                                            className="text-zinc-400 text-sm w-fit"
                                                            layoutId={`birthdate-${person.name}`}
                                                        >
                                                            {format(person.birthdate, "MMMM d")}
                                                        </motion.p>
                                                    </motion.div>

                                                    <motion.span
                                                        className="text-white font-bold"
                                                        layoutId={`age-${person.name}`}
                                                    >
                                                        {age}y
                                                    </motion.span>
                                                </motion.div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </React.Fragment>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    )
}

export default Birthdays