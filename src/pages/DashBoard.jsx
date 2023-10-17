// import CalendarData from './../components/calendar';
const DashBoard = () => {
  return (
    <>
    <main>
      <section className="text_Container">
        <h2>Dashboard</h2>
      </section>
      <section className="calendar_Container">
        <input type="date" className="calendar" />
      </section>
      <section className="maintenance_Container">
        <div className="maintenance_div"></div>
        <div  className="maintenance_div"></div>
        <div  className="maintenance_div"></div>
        <div className="RecentUpdate">
          <h3>Recent Update</h3>
          <div className="updateContainer"></div>
        </div>
      </section>
    </main>
    </>
  )
}

export default DashBoard