import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <MainLayout title="Settings">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-3 mb-8">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    defaultValue="Panashe"
                    className="mt-1"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    defaultValue="Tiriboyi"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="panashetiriboyi@gmail.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  defaultValue="+27 (66) 030-7918"
                  className="mt-1"
                />
              </div>

              <div className="pt-4">
                <Button className="bg-dashboardAccent hover:bg-teal-700">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Manage your notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Transaction Alerts</h4>
                    <p className="text-sm text-gray-500">
                      Receive notifications for new transactions
                    </p>
                  </div>
                  <Switch id="transaction-alerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Upcoming Bills</h4>
                    <p className="text-sm text-gray-500">
                      Get reminders for bills due soon
                    </p>
                  </div>
                  <Switch id="bill-reminders" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Budget Alerts</h4>
                    <p className="text-sm text-gray-500">
                      Be notified when you're close to budget limits
                    </p>
                  </div>
                  <Switch id="budget-alerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Communications</h4>
                    <p className="text-sm text-gray-500">
                      Receive promotional offers and updates
                    </p>
                  </div>
                  <Switch id="marketing" />
                </div>
              </div>

              <div className="pt-4">
                <Button className="bg-dashboardAccent hover:bg-teal-700">
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" className="mt-1" />
              </div>

              <div className="pt-4">
                <Button className="bg-dashboardAccent hover:bg-teal-700 mr-4">
                  Update Password
                </Button>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="font-medium mb-4">Two-Factor Authentication</h3>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Enable 2FA</h4>
                    <p className="text-sm text-gray-500">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Switch id="enable-2fa" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Settings;
