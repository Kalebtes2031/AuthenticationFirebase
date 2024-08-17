import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "../../../firebase-config";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Stack,
  Text,
  useToast,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Logo from "../../../assets/logopic.png";
import { useForm } from "react-hook-form";
import { useRef } from "react";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/home"); // Redirect to Home page on successful login
    } catch (error) {
      console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    }
  };
  const inputRef = useRef(null);
  const { isOpen, onToggle } = useDisclosure();

  const onClickReveal = () => {
      onToggle();
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    };

  return (
    // <div>
    //   <h3>Login</h3>
    //   <input
    //     placeholder="Email..."
    //     onChange={(event) => setLoginEmail(event.target.value)}
    //   />
    //   <input
    //     placeholder="Password..."
    //     type="password"
    //     onChange={(event) => setLoginPassword(event.target.value)}
    //   />
    //   <button onClick={login}>Login</button>
    // </div>
    <Container
      maxW={{ base: "100%", md: "lg" }}
      py={{ base: "0" }}
      px={{ base: "0" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Stack
        height={{ base: "100%", sm: "fit-content" }}
        boxSize={{ base: "100%" }}
        display={{ base: "flex", sm: "block" }}
        as="form"
      >
        <Stack
          height={{ base: "100%", sm: "fit-content" }}
          bg="white"
          spacing={{ base: 2, sm: 2 }}
          py={{ base: "6", sm: "8" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="">
            <Flex justify="center">
              <Image
                src={Logo}
                height={"180px"}
                transform="scale(1.2)"
                onClick={() => navigate("/auth/login")}
              />
            </Flex>

            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading mt= "14px" size={{ base: "sm", md: "md" }} color="brand.blue">
                Log in to your account
              </Heading>{" "}
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "2" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg.surface" }}
          >
            <Stack spacing="4">
              <Stack spacing="4">
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    placeholder="Enter your username"
                    type="email"
                    onChange={(event) => setLoginEmail(event.target.value)}
                  />{" "}
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                  <InputRightElement>
                        <IconButton
                          variant="text"
                          aria-label={
                            isOpen ? "Mask password" : "Reveal password"
                          }
                          icon={isOpen ? <HiEye /> : <HiEyeOff />}
                          onClick={onClickReveal}
                        />
                      </InputRightElement>
                    <Input
                      id="password"
                      ref={inputRef}
                      name="password"
                      type={isOpen ? "text" : "password"}
                      required
                      placeholder="********"
                      onChange={(event) => setLoginPassword(event.target.value)}
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>
                  <Text fontSize={{ base: "sm", sm: "md" }}>Remember me</Text>
                </Checkbox>
                <Button
                  fontSize={{ base: "sm", sm: "md" }}
                  variant="text"
                  size="sm"
                  color="#1C4532"
                  _hover={{ color: "#00A3C4", textDecor: "underline" }}
                >
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="4">
                <Button
                  bg="#38A169"
                  color="white"
                  type="button"
                  _disabled={{
                    cursor: "not-allowed",
                    opacity: "0.4",
                  }}
                  _hover={{ backgroundColor: "#2F855A" }}
                  onClick={login}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Stack
            direction="row"
            align="center"
            gap={{ base: 1, sm: 2 }}
            justify="center"
          >
            <Text color="fg.muted" fontSize={{ base: "sm", sm: "md" }}>
              Don't have an account?
            </Text>

            <Button
              fontSize={{ base: "sm", sm: "md" }}
              variant="text"
              size="lg"
              color="#38B2AC"
              textDecor="none"
              _hover={{ color: "#1D4044", textDecor: "underline" }}
              onClick={() => navigate("/auth/register")}
            >
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Login;
