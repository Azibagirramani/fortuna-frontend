// import mockAxios from "jest-mock-axios";
// import { HttpClient } from "../http-client";


// describe("testing http-client", () => {

//     afterAll(() => {
//         mockAxios.reset()
//     })

//     beforeEach(() => {
//     })

//     describe("when API call is successful", () => {

//         it("Make a get request", async () => {
//             const http = new HttpClient("localhost")
//             const users = [
//                 { id: 1, name: "John" },
//                 { id: 2, name: "Andrew" },
//             ];
//             mockAxios.get.mockResolvedValueOnce(users);

//             const result = await http.get("");

//             expect(mockAxios.get).toHaveBeenCalledWith("");
//             expect(result).toEqual(users);
//         })

//     })

// })

