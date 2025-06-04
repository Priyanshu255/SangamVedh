import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.actions"
import { auth } from "@clerk/nextjs/server";

type UpdateEventProps = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id)

  return (
    <div className="bg-gradient-to-br from-black to-blue-900">
      <section className="py- md:px-[13rem] md:py- shadow-2xl">
        <h3 className="wrapper h6-bold text-center sm:text-left text-blue-100/70">Update Event</h3>
      </section>

      <div className="wrapper py-10">
        <EventForm 
          type="Update" 
          event={event} 
          eventId={event._id} 
          userId={userId} 
        />
      </div>
    </div>
  )
}

export default UpdateEvent