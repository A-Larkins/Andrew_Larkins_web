const GuitarTable = ({list}) => {
    return (
            <div className="reactTable">
                <table>
                    <thead>
                        <tr>
                            <th>Guitar Id</th>
                            <th>Guitar Make</th>
                            <th>Guitar Model</th>
                            <th>Guitar Image</th>
                            <th>Guitar Price</th>
                            <th>Guitar Manufacture Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(listObj =>
                        <tr key={listObj.guitar_id}>
                            <td>{listObj.guitar_id}</td>
                            <td>{listObj.guitar_make}</td>
                            <td>{listObj.guitar_model}</td>
                            <td  className="shadowImage"><img src={listObj.guitar_image}/></td>
                            <td>{listObj.guitar_price}</td>
                            <td>{listObj.guitar_manufacture_date}</td>
            
                        </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            );
};

