import React from "react";
import "./Help.scss";

function Help() {
    return (
        <main>
            <h1>Help</h1>
            <div className="text-dec">
                <p>
                    This app will help you to keep track of your tasks.
                </p>
                <p>
                    You can include new tasks using the <strong>Add new task </strong>
                    form, at the end of the list.
                </p>
                <p>
                    Don't forget the change the status of the task to
                    <em> Completed</em> once it was done.
                </p>
            </div>
        </main>
    )
}

export default Help;