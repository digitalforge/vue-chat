import { ref } from "vue"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase/config"

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    if (!res) {
      error.value = "Could not complete sign up"
    }

    await updateProfile(res.user, { displayName: displayName })
    isPending.value = false
    return res
  } catch (err) {
    isPending.value = false
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup, isPending }
}

export default useSignup
