import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/appLayout/appLayout";
import Home from "./pages/home/home";
import TopPosts from "./pages/topPosts/topPosts";
import AllPosts from "./pages/allPosts/allPosts";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Results from "./pages/results/results";
import PostDetails from "./pages/postDetails/postDetails";
import ResultLayout from "./layouts/resultLayout/resultLayout";

function App() {
    return (
        <div className={"app"}>
            <Router>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Results />} />
                        {/* <Route path="/home" element={<Home />} /> */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/postdetails" element={<PostDetails />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="/top" element={<TopPosts />} />
                        <Route path="/allposts" element={<AllPosts />} />
                        <Route
                            path="/resultLayout"
                            element={<ResultLayout />}
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
