"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod"; // validation library
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
import { ScrollArea } from "./ui/scroll-area";

const formSchema = z.object({
  // 인풋타입 : string , 글자 길이 2~50자
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters!" })
    .max(50),
  email: z.string().email({ message: "Invalid email address!" }),
  phone: z
    .string()
    .min(10, {
      message: "Please enter a valid phone number with at least 10 digits.",
    })
    .max(15, {
      message:
        "Phone number should not exceed 15 digits including country code.",
    }),
  location: z.string().min(2),
  role: z.enum(["admin", "user"]),
  security_emails: z.boolean().default(false).optional(),
  marketing_emails: z.boolean().default(false).optional(),
});

const EditUser = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    // zodResolver -> formSchema 유효성 검사
    resolver: zodResolver(formSchema),
    // defaultValues ->  render={({ field }) 의 필드값
    defaultValues: {
      // FormField 컴포넌트에 전달되는 값
      /**
       * Since FormField is using a controlled component,
       * you need to provide a default value for the field.
       */
      username: "johndoe", // FormField ->   name="username"와 바인딩
      email: "john.doe@gmail.com",
      phone: "+1 234 56678",
      location: "New York, NY",
      role: "admin",
      security_emails: false,
      marketing_emails: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("submit", values);
  }

  /**
   * data-radix-scroll-area-viewport] : 'ScrollArea 가 감싸는 범위'의 직계 자식을 '&>' 선택한다
   * 
   * &> : 
   * &>는 Tailwind의 arbitrary selector 문법 중 하나입니다.
     &는 현재 요소 자신을 가리키고,
     그 뒤에 오는 **>**는 CSS의 직계 자식 선택자를 의미해요. 
   */

  return (
    <div className="">
      <SheetContent className="w-[400px] sm:w-[540px]" side="right">
        <ScrollArea className="h-full [&>[data-radix-scroll-area-viewport]]:max-h-[calc(400vh-200px)]">
          <SheetHeader>
            <SheetTitle>Edit User</SheetTitle>
            {/* SheetDescription : <p> 로 렌더링됨 -> <p><p>....<p><p> 중첨방지 -> asChild */}
            <SheetDescription asChild>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    // 1. 연결
                    control={form.control}
                    // 2. defaultValues 바인딩
                    name="username"
                    //   3. defaultValues 전달, 입력값 추적
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          {/* 여기 다른 Checbox, Date Picker, Radio Group.. 컴포넌트 적용가능  */}
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public username.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          Only Admin can see your email.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    // 1. 연결
                    control={form.control}
                    // 2. defaultValues 바인딩
                    name="phone"
                    //   3. defaultValues 전달, 입력값 추적
                    render={({ field }) => {
                      console.log("field 정보:", field);
                      // 4. input 필드 추적가능
                      return (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormDescription>Without '-'</FormDescription>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the public location.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="user">User</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormDescription>
                          Only verified users can be admin.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* SWITCH compnent */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium overfow-y-auto">
                      Email Notifications
                    </h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="marketing_emails"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Marketing emails</FormLabel>
                              <FormDescription>
                                Receive emails about new products, features, and
                                more.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="security_emails"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Security emails</FormLabel>
                              <FormDescription>
                                Receive emails about your account security.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                // disabled
                                aria-readonly
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </SheetDescription>
          </SheetHeader>
        </ScrollArea>
      </SheetContent>
    </div>
  );
};

export default EditUser;
