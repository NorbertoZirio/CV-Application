

export default function GeneralInfo() {
    return (
      <form action="">
        <h2>General Info</h2>

        <label htmlFor="Name">Name</label>
        <input id="Name" type="text" placeholder="Jon" />

        <label htmlFor="Email">Email</label>
        <input id="Email" type="text" placeholder="example@xxx.xx" />

        <label htmlFor="Phone">Phone Number</label>
        <input id="Phone" type="text" placeholder="+53 xxxxxxxx" />
      </form>
    );
}