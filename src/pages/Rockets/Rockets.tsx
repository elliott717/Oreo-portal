import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 5) {
      id
      mission_name
      launch_date_local
    }
  }
`
type DataProps = {
  mission_name: string,
  launch_date_local: string
}

export const Rockets = () => {
    const { data, loading, error } = useQuery(FILMS_QUERY)

    if (loading) return (
      <div>Loading...</div>
    )
    if (error) return <pre>{error.message}</pre>

    return (
      <>
        <div>
          <h1>Integrate GraphQL Testing</h1>
          <table className="table table-hover table-rounded table-striped border gy-7 gs-7">
            <thead>
              <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                <th>Name</th>
                <th>Joined date</th>
              </tr>
            </thead>
            <tbody>
              {data.launchesPast.map((el: DataProps, key: number) => (
                <tr key={key}>
                  <td>{el.mission_name}</td>
                  <td>{el.launch_date_local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
}
