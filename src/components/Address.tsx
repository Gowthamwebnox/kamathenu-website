"use client";
import { useEffect, useState } from "react";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
import { MapPin, Search, X, Loader2 } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

interface AddressInputProps {
  tabIndex: number;
  fieldName: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (address: string, pincode: string, lat: number, lng: number) => void;
  readOnly?: boolean;
}

export function AddressInput({
  tabIndex,
  fieldName,
  label,
  placeholder,
  value,
  onChange,
  readOnly = false,
}: AddressInputProps) {
  const [open, setOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  
  // const {
  //   ready,
  //   value: inputValue,
  //   suggestions: { status, data },
  //   setValue,
  //   clearSuggestions,
  // } = usePlacesAutocomplete({
  //   enabled: isScriptLoaded,
  // });

  // useEffect(() => {
  //   // Check if Google Maps script is loaded
  //   const checkGoogleMapsLoaded = () => {
  //     if (window.google && window.google.maps) {
  //       setIsScriptLoaded(true);
  //     } else {
  //       setTimeout(checkGoogleMapsLoaded, 100);
  //     }
  //   };
  //   checkGoogleMapsLoaded();
  // }, []);

  const truncateAddress = (address: string) => {
    if (!address) return placeholder;
    return address.length > 30 ? `${address.substring(0, 20)}...` : address;
  };

  // const handleSelect = async (description: string) => {
  //   setValue(description, false);
  //   clearSuggestions();
  //   try {
  //     const results = await getGeocode({ address: description });
      
  //     if (!results || results.length === 0) {
  //       onChange(description, "", 0, 0);
  //       return;
  //     }

  //     const { lat, lng } = await getLatLng(results[0]);
  //     const addressComponents = results[0].address_components;

  //     let pincode = "";
  //     const postalCodeComponent = addressComponents.find((component: any) =>
  //       component.types.includes("postal_code")
  //     );

  //     if (postalCodeComponent) {
  //       pincode = postalCodeComponent.long_name;
  //     } else {
  //       const postalCodeShort = addressComponents.find(
  //         (component: any) =>
  //           component.short_name && /^\d{6}$/.test(component.short_name)
  //       );
  //       if (postalCodeShort) {
  //         pincode = postalCodeShort.short_name;
  //       }
  //     }

  //     onChange(description, pincode, lat, lng);
  //     setOpen(false);
  //   } catch (error) {
  //     console.error("Error in handleSelect:", error);
  //     onChange(description, "", 0, 0);
  //   }
  // };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="w-full text-left" disabled={readOnly}>
            <div className={`flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 shadow-sm ${!readOnly ? 'hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500' : 'bg-gray-50 cursor-not-allowed'}`}>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                <span className="text-sm text-gray-700">
                  {truncateAddress(value) || placeholder}
                </span>
              </div>
              <Search className="h-4 w-4 text-gray-400" />
            </div>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm animate-in fade-in duration-200" />
          <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded-2xl w-[90%] max-w-md z-50 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <Dialog.Title className="text-xl font-semibold text-gray-900">
                Select Location
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </Dialog.Close>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              {/* <input
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                disabled={!isScriptLoaded}
                placeholder={isScriptLoaded ? "Search for a location" : "Loading Google Maps..."}
                className="w-full border border-gray-200 pl-10 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
              /> */}
              {!isScriptLoaded && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
                </div>
              )}
            </div>

            {isScriptLoaded && status === "OK" && (
              <div className="mt-4 max-h-[300px] overflow-auto rounded-xl border border-gray-200 shadow-sm">
                {/* {data.map(({ place_id, description }) => (
                  <button
                    key={place_id}
                    onClick={() => handleSelect(description)}
                    className="w-full px-4 py-3.5 text-left hover:bg-gray-50 transition-colors duration-200 border-b last:border-b-0 flex items-start group"
                  >
                    <MapPin className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {description}
                    </span>
                  </button>
                ))} */}
              </div>
            )}

            {isScriptLoaded && status === "ZERO_RESULTS" && (
              <div className="mt-4 text-center text-gray-500 py-6 bg-gray-50 rounded-xl">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p>No locations found</p>
                <p className="text-sm mt-1">Try a different search term</p>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}