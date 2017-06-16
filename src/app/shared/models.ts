/**
 * users: {
 *   $uid: {
 *     name,
 *     email,
 *     activeTravel: {
 *     },
 *     diary: {
 *       $fef: {
 *         travelId,
 *         travelTitle,
 *         picasaAlbumId,
 *         time,
 *         title,
 *         text,
 *         location: {
 *           latitude,
 *           longitude,
 *           altitude
 *         },
 *         addressDetails: {
 *           adminArea,
 *           subAdminArea,
 *           thoroughfare,
 *           subThoroughfare,
 *           subLocality,
 *           countryCode,
 *           countryName,
 *           featureName,
 *           premises,
 *           locality,
 *           phone,
 *           postalCode
 *         },
 *         weather: {
 *           unit, // Default, Metric, Imperial
 *           weatherMain, // Group of weather parameters (Rain, Snow, Extreme etc.)
 *           weatherDescription, // Weather condition within the group
 *           weatherIcon,; // Weather icon id
 *           temp, // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 *           pressure, // Atmospheric pressure (on the sea level), hPa
 *           humidity, // Humidity, %
 *           windSpeed, // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
 *           windDeg, // Wind direction, degrees (meteorological)
 *           clouds, // Cloudiness, %
 *           sunrise, // time stamp
 *           sunset // time stamp
 *         },
 *         photos: {
 *           [{
 *             localUri,
 *             picasaUri
             }]
 *         },
 *         audios[],
 *         videos[]
 *       }
 *     },
 *     reminder: {
 *       uid, // unique identifier of item for notifications and pendingIntent
 *       travelId,
 *       travelTitle,
 *       title,
 *       task: {[
 *         item,
 *         checked
 *       ]
 *       },
 *       viewAsCheckboxes,
 *       completed,
 *       active,
 *       type, // "time" - remind at time, "locatiton" - remind at location, null or empty - don't remind
 *       // Remind at time
 *       time,
 *       interval,
 *       // Remind in a point
 *       waypoint: {
 *         travelId,
 *         title,
 *         location: {
 *           latitude,
 *           longitude,
 *           altitude
 *         }
 *       },
 *       distance,
 *       repeat
 *     },
 *     travels: {
 *       $ref: {
 *         creationTime,
 *         start,
 *         stop,
 *         title,
 *         description,
 *         active,
 *         picasaAlbumId,
 *         defaultCover,
 *         userCover
 *       }
 *     },
 *     tracks: {
 *       $ref: {
 *         track: {
 *           time,
 *           location: {
 *             latitude,
 *             longitude,
 *             altitude
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 */

export class ActiveTravel {
  activeTravelKey: string;
  activeTravelTitle: string;
}

export class Travel {
  creationTime: number;
  start: number;
  stop: number;
  title: string;
  description: string;
  active: boolean;
  picasaAlbumId: string;
  defaultCover: string;
  userCover: string;
}

export class AddressDetails {
  adminArea: string;
  subAdminArea: string;
  thoroughfare: string;
  subThoroughfare: string;
  subLocality: string;
  countryCode: string;
  countryName: string;
  featureName: string;
  premises: string;
  locality: string;
  phone: string;
  postalCode: string;
}

export class LocationPoint {
  latitude: number;
  longitude: number;
  altitude: number;
}

export class WeatherInfo {
  unit: string; // Default, Metric, Imperial
  weatherMain: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
  weatherDescription: string; // Weather condition within the group
  weatherIcon: string; // Weather icon id
  temp: string; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  pressure: number; // Atmospheric pressure (on the sea level), hPa
  humidity: number; // Humidity, %
  windSpeed: number; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
  windDeg: number; // Wind direction, degrees (meteorological)
  clouds: number; // Cloudiness, %
  sunrise: number; // time stamp
  sunset: number; // time stamp
}

export class Photo {
  localUri: string;
  picasaUri: string;
}

export class DiaryNote {
  travelId: string;
  travelTitle: string;
  picasaAlbumId: string;
  time: number;
  title: string;
  text: string;
  location: LocationPoint;
  addressDetails: AddressDetails;
  weather: WeatherInfo;
  photos: Photo[];
  audios: string[];
  videos: string[];
}

export class Waypoint {
  travelId: string;
  title: string;
  location: LocationPoint;
}

export class TodoTask {
  item: string;
  checked: boolean;
}

export class ReminderItem {
  uid: number; // unique identifier of item for notifications and pendingIntent
  travelId: string;
  travelTitle: string;
  title: string;
  task: TodoTask[];
  viewAsCheckboxes: boolean;
  completed: boolean;
  active: boolean;
  type: string; // "time" - remind at time, "locatiton" - remind at location, null or empty - don't remind
  // Remind at time
  time: number;
  interval: number;
  // Remind in a point
  waypoint: Waypoint;
  distance: number;
  repeat: boolean;
}

export class TrackPoint {
  time: number;
  location: LocationPoint;
}

export class TrackList {
  // Key = timestamp
  track: TrackPoint[];
}
