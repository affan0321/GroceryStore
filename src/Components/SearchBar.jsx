import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Products..."
            value={query}
            onChange={handleInputChange}
            sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                        borderColor: "#007bff",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#007bff",
                    },
                },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}
