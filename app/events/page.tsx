"use client";
import Events from '@/components/Events';
import Navbar from '@/components/Navbar';
const EventsPageRoute=()=>{
    return(
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Events/>
      </main>
    </div>);
}
export default EventsPageRoute;