import React from 'react';

const EventTable = (): JSX.Element => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 border border-black dark:border-white">
            Date
          </th>
          <th className="px-4 py-2 border border-black dark:border-white">
            Titre
          </th>
          <th className="px-4 py-2 border border-black dark:border-white">
            Lieu
          </th>
          <th className="px-4 py-2 border border-black dark:border-white">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black dark:border-white px-4 py-2">
            23/05/2023
          </td>
          <td className="border border-black dark:border-white px-4 py-2">
            Soirée de soutien Salah Hamouri
          </td>
          <td className="border border-black dark:border-white px-4 py-2">
            118, avenue Youri Gagarine, Villejuif
          </td>
          <td className="border border-black dark:border-white px-4 py-2">
            Soirée d&apos;accueil en présence de Salah Hamouri, organisée par
            les comités Palestine du Val-de-Marne
          </td>
        </tr>
        <tr className="dark:bg-gray-400 bg-gray-600">
          <td className="border border-black dark:border-white px-4 py-2 dark:text-black text-white"></td>
          <td className="border border-white dark:border-white px-4 py-2 dark:text-black text-white"></td>
          <td className="border border-white dark:border-white px-4 py-2 dark:text-black text-white"></td>
          <td className="border border-white dark:border-white px-4 py-2 dark:text-black text-white"></td>
        </tr>
        <tr>
          <td className="border border-black dark:border-white px-4 py-2"></td>
          <td className="border border-black dark:border-white px-4 py-2"></td>
          <td className="border border-black dark:border-white px-4 py-2"></td>
          <td className="border border-black dark:border-white px-4 py-2"></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4} className="text-center">
            Rejoignez-nous !
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default EventTable;
