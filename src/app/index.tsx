// sign up screen

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SignUpFormData, signUpSchema } from "../schemas/SignUpSchema";


export default function SignUpScreen() {
  // connecting zod schema to the form
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }, 
  });

  // only runs if everything passes validation
  const onSubmit - (data: SignUpFormData) => {
    console.log(data.firstName, data.lastName, data.email);
  }