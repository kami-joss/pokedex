import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQueryParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (values: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      
      Object.entries(values).forEach(([name, value]) => {
        if (!value || value === "") {
          params.delete(name);
        } else {
          params.set(name, value);
        }
      });

      return params.toString();
    },
    [searchParams]
  );

  const createUrl = useCallback(
    (values: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(values).forEach(([name, value]) => {
        if (!value || value === "") {
          params.delete(name);
        } else {
          params.set(name, value);
        }
      });

      return pathname + "?" + params.toString();
    },
    [searchParams, pathname]
  );

  const deleteParams = useCallback(
    (values: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(values).forEach(([name, value]) => {
        params.delete(name, value);
      });

      return params.toString();
    },
    [searchParams]
  );

  return {
    createQueryString,
    createUrl,
    deleteParams,
  };
}
