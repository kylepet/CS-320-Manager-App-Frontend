import Head from 'next/head'
import { Inter } from 'next/font/google'
import Title_box from '@/components/titlebox'
import Fname from '@/components/fname'
import Lname from '@/components/lname'
import YOG from '@/components/yog'
import Previous from '@/components/previous'
import { useQuery } from "react-query";
import { sectionDetails } from '../../services/apiSection';
import StudentSection from '@/components/sectionStudent'
import Sections from '@/components/sections'
import axios from 'axios'
import { ReactElement, JSXElementConstructor, ReactFragment, useEffect, useMemo, useState } from 'react'

export default function StudentDashboard(this: any) {

    return (
    <>
        <Head>
            <title>Student Dashboard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
            <div className="max-w-lg mx-auto space-y-2">
                <Sections></Sections>
            </div>
        </main>
    </>
    )
}