import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  // gql,
} from "@apollo/client";
import App from "./App";
import GlobalFont from "./styles/fonts";
import GlobalStyle from "./styles/globalStyle";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

// client.query({
//   query: gql`{
//     launchesPast(limit: 10) {
//       mission_name
//       launch_date_local
//       launch_site {
//         site_name_long
//       }
//       links {
//         article_link
//         video_link
//       }
//       rocket {
//         rocket_name
//         first_stage {
//           cores {
//             flight
//             core {
//               reuse_count
//               status
//             }
//           }
//         }
//         second_stage {
//           payloads {
//             payload_type
//             payload_mass_kg
//             payload_mass_lbs
//           }
//         }
//       }
//       ships {
//         name
//         home_port
//         image
//       }
//     }
//   }`
// }).then(res => console.log(res))

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <GlobalFont />
    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById("root")
);
