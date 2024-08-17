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
  FormHelperText,
  FormErrorMessage,
  FormErrorIcon,
} from "@chakra-ui/react";
import Logo from "../../../assets/logopic.png";
import { useRef, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate
  const inputRef = useRef(null);
  const { isOpen, onToggle } = useDisclosure();


  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate("/auth/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    // <div>
    //   <h3>Register User</h3>
    //   <input
    //     placeholder="Email..."
    //     onChange={(event) => setRegisterEmail(event.target.value)}
    //   />
    //   <input
    //     placeholder="Password..."
    //     type="password"
    //     onChange={(event) => setRegisterPassword(event.target.value)}
    //   />
    //   <button onClick={register}>Create User</button>
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
          <Stack spacing="6">
            <Flex justify="center">
              <Image
                src={Logo}
                height={"180px"}
                transform="scale(1.2)"
                onClick={() => navigate("/auth/register")}
              />
            </Flex>
  
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "md" }} color="#276749">
                Register for an account today
              </Heading>
              
            </Stack>
          </Stack>
          <Box
            as="form"
            // onSubmit={handleSubmit(onSubmit)}
            py={{ base: "2", sm: "5" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg.surface" }}
          >
            <Stack spacing="3">
              <Stack spacing="2">
                
                <FormControl isRequired>
                  <FormLabel htmlFor="email" fontWeight="bold">
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    onChange={(event) => setRegisterEmail(event.target.value)}
                    placeholder="Enter your email"
                    
                  />
                  
                </FormControl>
  
                <FormControl isRequired>
                  <FormLabel htmlFor="password" fontWeight="bold">
                    Password
                  </FormLabel>
                  <InputGroup>
                    <InputRightElement>
                      <IconButton
                        variant="text"
                        aria-label={isOpen ? "Mask password" : "Reveal password"}
                        icon={isOpen ? <HiEye /> : <HiEyeOff />}
                        onClick={onClickReveal}
                      />
                    </InputRightElement>
                    <Input
                      id="password"
                      ref={inputRef}
                      name="password"
                      placeholder="********"
                      type={isOpen ? "text" : "password"}
                      autoComplete="current-password"
                      onChange={(event) => setRegisterPassword(event.target.value)}
                    />
                  </InputGroup>{" "}
                
                </FormControl>
                {/* <FormControl isRequired>
                  <FormLabel htmlFor="passwordConfirm" fontWeight="bold">
                    Confirm Password
                  </FormLabel>
                  <InputGroup>
                    <InputRightElement>
                      <IconButton
                        variant="text"
                        aria-label={isOpen ? "Mask password" : "Reveal password"}
                        icon={isOpen ? <HiEye /> : <HiEyeOff />}
                        onClick={onClickReveal}
                      />
                    </InputRightElement>
                    <Input
                      id="passwordConfirm"
                      ref={inputRef}
                      name="passwordConfirm"
                      placeholder="********"
                      type={isOpen ? "text" : "password"}
                      autoComplete="current-password"
                      required
                    
                    />
                  </InputGroup>
                  
                </FormControl> */}
              </Stack>
  
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
              </HStack>
              <Stack spacing="4">
                <Button
                  bg="#38A169"
                  type="button"
                  _hover={{
                    bg: "#2F855A",
                  }}
                  _disabled={{
                    backgroundColor: "gray",
                    cursor: "not-allowed",
                    color: "gray.400",
                    _hover: {
                      backgroundColor: "gray",
                    },
                  }}
                  color="white"
                  onClick={register}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
            <Stack direction="row" align="center" justify="center">
                <Text color="fg.muted">Already have an account?</Text>
                <Button
                  variant="text"
                  size="lg"
                  color="#38B2AC"
                  textDecor="none"
                  _hover={{ color: "#1D4044", textDecor: "underline" }}
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </Button>
              </Stack>
          </Box>
          
        </Stack>
        </Stack>
      </Container>
  );
}

export default Register;
