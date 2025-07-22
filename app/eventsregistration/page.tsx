"use client";
import EventRegistrationForm from '@/components/EventRegistrationForm';
import Navbar from '@/components/Navbar';
const EventsRegistrationPage=()=>{
    return(
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <EventRegistrationForm/>
      </main>
    </div>);
}
export default EventsRegistrationPage;