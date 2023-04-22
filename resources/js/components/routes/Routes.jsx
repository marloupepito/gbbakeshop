import React, { Component } from "react";
import Auth from "../auth/Auth";
import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/Error404";
import AdministratorPage from "../administrator/Page";
import DeliveryPage from "../administrator/branches/delivery/Page";
import RequestSection from "../administrator/branches/delivery/section/Request";
import DeliverySection from "../administrator/branches/delivery/section/Delivery";
import ReceivedSection from "../administrator/branches/delivery/section/Received";
import AppLoading from "../administrator/components/Loading";

import EmployeesPage from "../administrator/branches/employees/Page";
import AccountFormPage from "../administrator/branches/employees/components/Form";
import AccountPageLayout from "../administrator/branches/employees/sections/Page";
import AccountAttendancePage from "../administrator/branches/employees/sections/attendance/Page";
import AccountBenefitsPage from "../administrator/branches/employees/sections/benefits/Page";
import AccountChargesPage from "../administrator/branches/employees/sections/charges/Page";
import AccountCreditsPage from "../administrator/branches/employees/sections/credits/Page";
import AccountProductionPage from "../administrator/branches/employees/sections/production/Page";
import AccountSalaryPage from "../administrator/branches/employees/sections/salary/Page";

import IngredientsPage from "../administrator/branches/ingredients/Page";
import ProductionPage from "../administrator/branches/production/Page";

import CreateSection from "../administrator/branches/production/section/CreateSection";
import ProductionRecords from "../administrator/branches/production/section/ProductionRecords";
import ProductionSectionDrawer from "../administrator/branches/production/section/components/Drawer";
import BreadListSection from "../administrator/branches/production/section/BreadListSection";
import BreadReportSection from "../administrator/branches/production/section/BreadReport";
import BreadOutSection from "../administrator/branches/production/section/BreadOutSection";
import BreadSoldSection from "../administrator/branches/production/section/BreadSoldSection";

import DashboardPage from "../administrator/dashboard/Page";
import DashboardSection from "../administrator/dashboard/section/Dashboard";
import DashboardCharts from "../administrator/dashboard/section/Charts";

import BranchDashboardPage from "../administrator/branches/dashboard/Page";

import BranchPageBranch from "../branch/Page";
import DeliveryPageBranch from "../branch/delivery/Page";
import RequestSectionBranch from "../branch/delivery/section/Request";
import DeliverySectionBranch from "../branch/delivery/section/Delivery";
import ReceivedSectionBranch from "../branch/delivery/section/Received";
import AppLoadingBranch from "../branch/components/Loading";
import EmployeesPageBranch from "../branch/employees/Page";
import IngredientsPageBranch from "../branch/ingredients/Page";
import ProductionPageBranch from "../branch/production/Page";
import BreadReportSectionBranch from "../branch/production/section/BreadReport";
import CreateSectionBranch from "../branch/production/section/CreateSection";
import ProductionSectionDrawerBranch from "../branch/production/section/components/Drawer";
import ProductionRecordsBranch from "../branch/production/section/ProductionRecords";
import BreadListSectionBranch from "../branch/production/section/BreadListSection";
import BreadOutSectionBranch from "../branch/production/section/BreadOutSection";
import BreadSoldSectionBranch from "../branch/production/section/BreadSoldSection";
//import DashboardPageBranch from '../branch/dashboard/Page'



import RecordsPageBranch from "../branch/records/Page";

import AttendanceEmployeesBranch from "../branch/employees/sections/attendance/Page";
import ChargesEmployeesBranch from "../branch/employees/sections/charges/Page";
import CreditsEmployeesBranch from "../branch/employees/sections/credits/Page";
import SalaryEmployeesBranch from "../branch/employees/sections/salary/Page";
import BenefitsEmployeesBranch from "../branch/employees/sections/benefits/Page";
import ProductionEmployeesBranch from "../branch/employees/sections/production/Page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
        // loader: rootLoader,
        // children: [
        //   {
        //     path: "team",
        //     element: <Team />,
        //     loader: teamLoader,
        //   },
        // ],
    },
    { path: "*", element: <Error404 /> },
    {
        path: "/administrator",
        element: <AdministratorPage />,
        children: [
            {
                path: "/administrator/dashboard",
                element: <DashboardPage />,
                children: [
                    {
                        path: "/administrator/dashboard",
                        element: <DashboardSection />,
                    },
                    {
                        path: "/administrator/dashboard/charts/:id",
                        element: <DashboardCharts />,
                    },
                ],
            },
            {
                path: "/administrator/:id/ingredients",
                element: <IngredientsPage />,
            },
            {
                path: "/administrator/:id/delivery",
                element: <DeliveryPage />,
                children: [
                    {
                        path: "/administrator/:id/delivery/request",
                        element: <RequestSection />,
                    },
                    {
                        path: "/administrator/:id/delivery/delivered",
                        element: <DeliverySection />,
                    },
                    {
                        path: "/administrator/:id/delivery/received",
                        element: <ReceivedSection />,
                    },
                ],
            },
            {
                path: "/administrator/:id/production",
                element: <ProductionPage />,
                children: [
                    {
                        path: "/administrator/:id/production/create",
                        element: <CreateSection />,
                    },
                    {
                        path: "/administrator/:id/production/records/:dates",
                        element: <ProductionRecords />,
                    },
                    // {
                    //     path: "/administrator/:id/production/create/form",
                    //     element: <ProductionSectionDrawer />,
                    // },
                    {
                        path: "/administrator/:id/production/list",
                        element: <BreadListSection />,
                    },
                    {
                        path: "/administrator/:id/production/bread",
                        element: <BreadReportSection />,
                    }, //
                    {
                        path: "/administrator/:id/production/sold",
                        element: <BreadSoldSection />,
                    },
                    {
                        path: "/administrator/:id/production/out",
                        element: <BreadOutSection />,
                    },
                ],
            },
            {
                path: "/administrator/:id/accounts",
                element: <EmployeesPage />,
                children: [
                    {
                        path: "/administrator/:id/accounts",
                        element: <AccountFormPage />,
                    },
                    {
                        path: "/administrator/:id/accounts/api",
                        element: <AccountPageLayout />,
                        children: [
                            {
                                path: "/administrator/:id/accounts/api/attendance/:id",
                                element: <AccountAttendancePage />,
                            },
                            {
                                path: "/administrator/:id/accounts/api/credits/:id",
                                element: <AccountCreditsPage />,
                            },
                            {
                                path: "/administrator/:id/accounts/api/production/:id",
                                element: <AccountProductionPage />,
                            },
                            {
                                path: "/administrator/:id/accounts/api/salary/:id",
                                element: <AccountSalaryPage />,
                            },
                            {
                                path: "/administrator/:id/accounts/api/charges/:id/:dates",
                                element: <AccountChargesPage />,
                            },
                            {
                                path: "/administrator/:id/accounts/api/benefits/:id",
                                element: <AccountBenefitsPage />,
                            },
                        ],
                    },
                ],
            },
            { path: "/administrator/:id/:periodical", element: <BranchDashboardPage /> },
            { path: "/administrator/:id/loading", element: <AppLoading /> },
        ],
    },

    {
        path: "/branch",
        element: <BranchPageBranch />,
        children: [
            {
                path: "/branch/:id/ingredients",
                element: <IngredientsPageBranch />,
            },
            {
                path: "/branch/:id/delivery",
                element: <DeliveryPageBranch />,
                children: [
                    {
                        path: "/branch/:id/delivery/request",
                        element: <RequestSectionBranch />,
                    },
                    {
                        path: "/branch/:id/delivery/delivered",
                        element: <DeliverySectionBranch />,
                    },
                    {
                        path: "/branch/:id/delivery/received",
                        element: <ReceivedSectionBranch />,
                    },
                ],
            },
            {
                path: "/branch/:id/production",
                element: <ProductionPageBranch />,
                children: [
                    {
                        path: "/branch/:id/production/create",
                        element: <CreateSectionBranch />,
                    },
                    {
                        path: "/branch/:id/production/records/:dates",
                        element: <ProductionRecordsBranch />,
                    },
                    {
                        path: "/branch/:id/production/create/form",
                        element: <ProductionSectionDrawerBranch />,
                    },
                    {
                        path: "/branch/:id/production/list",
                        element: <BreadListSectionBranch />,
                    },
                    {
                        path: "/branch/:id/production/bread",
                        element: <BreadReportSectionBranch />,
                    }, //
                    {
                        path: "/branch/:id/production/sold",
                        element: <BreadSoldSectionBranch />,
                    },
                    {
                        path: "/branch/:id/production/out",
                        element: <BreadOutSectionBranch />,
                    },
                ],
            },
            {
                path: "/branch/:id/records",
                element: <RecordsPageBranch />,
                children:[
                    {path: "/branch/:id/records/:dates",element: <EmployeesPageBranch />}
                ]
            },
            {
                path: "/branch/:id/accounts",
                element: <EmployeesPageBranch />,
                children: [
                    {
                        path: "/branch/:id/accounts",
                        element: <AttendanceEmployeesBranch />,
                    },
                    {
                        path: "/branch/:id/accounts/attendance",
                        element: <AttendanceEmployeesBranch />,
                    },
                    {
                        path: "/branch/:id/accounts/charges/:dates",
                        element: <ChargesEmployeesBranch />,
                    },
                    {
                        path: "/branch/:id/accounts/credits",
                        element: <CreditsEmployeesBranch />,
                    },
                    {
                        path: "/branch/:id/accounts/salary",
                        element: <SalaryEmployeesBranch />,
                    },
                    {
                        path: "/branch/:id/accounts/benefits",
                        element: <BenefitsEmployeesBranch />,
                    },
                    {
                        path: "/branch/:id/accounts/production",
                        element: <ProductionEmployeesBranch />,
                    },
                ],
            },
            // { path:'/branch/:id/employees', element:<EmployeesPageBranch />},
            { path: "/branch/:id/loading", element: <AppLoadingBranch /> },
        ],
    },
]);
