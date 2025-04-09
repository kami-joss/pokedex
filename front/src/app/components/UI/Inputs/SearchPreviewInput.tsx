import useSearchPreviewInput from "@/lib/hooks/useSearchPreviewInput";
import SearchPreview from "@/app/components/Pokedex/SearchPreview";
import TextInput from "@/app/components/UI/Inputs/TextInput";
import { Pokemon } from "@/lib/interface";

interface Props {
  searchPreview: Pokemon[] | undefined;
  placeholder?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchPreviewInput({
  searchPreview,
  placeholder,
  name,
  onChange,
}: Props) {
  const { isFocus, onFocus, onBlur } = useSearchPreviewInput();

  return (
    <>
      <TextInput
        placeholder={placeholder}
        name={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isFocus && searchPreview && <SearchPreview pokemons={searchPreview} />}
    </>
  );
}
