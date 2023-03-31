<script setup>
import { useQuery } from "vue-query";
import { Directus } from "@directus/sdk";
import { ref } from "vue";

const API = new Directus("https://staging-backend.teamwell.co");
API.auth.static(import.meta.env.VITE_API_KEY);

const query = (props) => {
  return useQuery(
    [props],
    () => {
      return API.items(props.url).readByQuery({
        fields: props.field,
      });
    },

    { enabled: true, keepPreviousData: true }
  );
};

const employees = ref(
  query({
    url: "employees",
    field: [
      "user.first_name",
      "user.last_name",
      "user.email",
      "user.avatar",
      "user.active",
      "position.positions_id.department.name",
      "status",
      "email",
      "position.name",
      "id",
      "contracts.entry_date",
    ],
  })
);

const checkPosition = (array) => {
  if (array.length === 0) {
  }
};

const sidebar = ref(false);
console.log(employees.value.data);
</script>

<template>
  <div>
    <div
      class="bg-white text-cyan-700 shadow px-2 py-4 text-4xl font-extrabold border-2 border-b-grey-100 flex-1"
    >
      Teamwell
    </div>
    <div class="relative flex min-h-screen pl-2">
      <!-- sidebar -->
      <div
        class="gap-4 bg-cyan-600 text-cyan-100 w-30 p-2 space-y-6 px-2 py-4 absolute inset-y-0 left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out"
        :class="{ 'relative -translate-x-0': sidebar }"
      >
        <a href="#"> </a>
        <nav>
          <a
            href="/"
            class="grid py-6 place-items-center p-2 hover:bg-cyan-700 hover:rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              /></svg
            ><span class="text-white">Employees</span>
          </a>
          <a
            href="/"
            class="grid py-6 place-items-center pb-6 hover:bg-cyan-700 hover:rounded-lg"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              /></svg
            ><span class="text-white">conges</span>
          </a>
          <a
            href="/"
            class="grid py-6 place-items-center pb-6 hover:bg-cyan-700 hover:rounded-lg"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              /></svg
            ><span class="text-white">calendar</span>
          </a>
          <a
            href="/"
            class="grid py-6 place-items-center pb-6 hover:bg-cyan-700 hover:rounded-lg"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              /></svg
            ><span class="text-white">Material</span>
          </a>
          <a
            href="/"
            class="grid py-6 place-items-center pb-6 hover:bg-cyan-700 hover:rounded-lg"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              /></svg
            ><span class="text-white">Vehicle</span>
          </a>
          <a
            href="/"
            class="grid py-6 place-items-center pb-6 hover:bg-cyan-700 hover:rounded-lg"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              /></svg
            ><span class="text-white">Projects</span>
          </a>
        </nav>
      </div>
      <!-- main content -->
      <div class="flex-1 h-1/5 overflow-y-auto">
        <!-- header -->
        <div class="bg-white shadow px-2 py-4">
          <button @click="sidebar = !sidebar" class="text-cyan-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
        <!-- content -->
        <div class="p-8 text-cyan-700 font-extrabold">
          <h1>Employee List</h1>

          <div v-if="employees.isLoading">Loading...</div>
          <div v-else>
            <table class="w-full">
              <thead class="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th class="p-3 text-sm font-semibold tracking-wide text-left">
                    Name
                  </th>
                  <th class="p-3 text-sm font-semibold tracking-wide text-left">
                    Position
                  </th>
                  <th class="p-3 text-sm font-semibold tracking-wide text-left">
                    Department
                  </th>
                  <th class="p-3 text-sm font-semibold tracking-wide text-left">
                    contract start date
                  </th>
                  <th class="p-3 text-sm font-semibold tracking-wide text-left">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-pink-500"
                  v-for="employee in employees.data.data"
                  :key="employee.id"
                >
                  <td class="bg-white p-3 text-sm text-gray-700">
                    <div class="flex">
                      <div class="img">
                        <img
                          class="w-10 h-10"
                          :src="`data:image/png;base64,${btoa(
                            employee.user.avatar
                          )}`"
                          alt=""
                        />
                      </div>
                      <div class="">
                        <p class="font-normal">
                          {{ employee.user.first_name }}
                          {{ employee.user.last_name }}
                        </p>
                        <p class="font-normal">{{ employee.email }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="bg-gray-50 p-3 text-sm text-gray-700">
                    <div></div>
                  </td>
                  <td class="bg-white p-3 text-sm text-gray-700">
                    <div
                      v-for="department in employee.position"
                      :key="department"
                    >
                      <div v-for="item in department.positions_id" :key="item">
                        {{ item.name }}
                      </div>
                    </div>

                    <!-- <span v-else> No position currently held </span> -->
                  </td>
                  <td class="bg-gray-50 p-3 text-sm text-gray-700">
                    <div v-for="contract in employee.contracts" :key="contract">
                      <span v-if="contract">{{ contract.entry_date }}</span>
                      <span v-else>No contracts available for individual</span>
                    </div>
                  </td>
                  <td class="bg-white p-3 text-sm text-gray-700">
                    <span
                      class="p-1.5 text-xs font-medium uppercase tracking-wider text-white bg-green-400 rounded-lg"
                      >{{ employee.status }}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              v-for="employee in employees.data.data"
              :key="employee.id"
              class="mb-3"
            >
              {{ employee }}
            </div>

            <!-- <div v-for="employee in employees" :key="employee.id">
              <img :src="employee.profile_picture.url" :alt="employee.name" />
              <p>Name: {{ employee.name }}</p>
              <p>Email: {{ employee.email }}</p>
              <p>Position: {{ employee.position }}</p>
              <p>Department: {{ employee.department }}</p>
              <p>Status: {{ employee.status }}</p>
              <p>Start of Contract: {{ employee.start_of_contract }}</p>
            </div> -->
          </div>
          <div v-if="employees.isError">Error: {{ employees.error }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
