import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser, getInterviewsByuserId, getLatestInterviews } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { late } from 'zod'

const page = async () => {

  const user = await getCurrentUser();

  const [] = await Promise.all([
    await getInterviewsByuserId(user?.id!),
    await getLatestInterviews({userId:user?.id!})
  ]);


  const userInterviews = await getInterviewsByuserId(user?.id!);

  const latestInterviews = await getLatestInterviews({userId:user?.id!});


  const hasPastInterviews = userInterviews?.length > 0 ; 
  const hasUpcomingInterviews = latestInterviews?.length > 0 ;
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
            <h2>Get Interview-Ready with AI-powdered Practice & Feedback</h2>
            <p className="text-lg ">
              Practice on real interview questions & get instant feedback
            </p>
            <Button asChild className="btn-primary max -sm:w-full">
              <Link href="/interview">Start an Interview</Link>
            </Button>
            <Image src="/robot.png" alt="robo-dude" width={200} height={200} className="max-sm:hidden"/>

        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
        {
            hasPastInterviews ? (
            userInterviews?.map((interview)=>(
              <InterviewCard key= {interview.id} {... interview} />

            ))) :( 
              
              <p>You haven't taken any interviews yet</p> 

            )
        }
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
        {hasUpcomingInterviews ? (
            latestInterviews?.map((interview)=>(
              <InterviewCard key= {interview.id} {... interview} />
            ))) :( 
              <p>You have no new interviews available</p>
            )}
        </div>
      </section>
    </>
  )
}

export default page
