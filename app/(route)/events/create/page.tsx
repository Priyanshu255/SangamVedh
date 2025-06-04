import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <div className="bg-gradient-to-br from-black to-blue-900">
      <section className="py- md:px-[13rem] md:py- shadow-2xl">
        <h3 className="wrapper h6-bold text-center sm:text-left text-blue-100/70">Create Event</h3>
      </section>

      <div className="wrapper py-10">
        <EventForm userId={userId} type="Create" />
      </div>
    </div>
  )
}

export default CreateEvent