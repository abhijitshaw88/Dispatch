import React from 'react';

const Table = ({ users }) => {


  return (
    <table className="table">
		<thead>
			<tr>

      			<th scope="col">name</th>


			</tr>
		</thead>
		<tbody>
			{
				users.map(user => (
					<tr>

						<td>{user.name}</td>

					</tr>
				))
			}
		</tbody>
	</table>
  );
};

export default Table;
