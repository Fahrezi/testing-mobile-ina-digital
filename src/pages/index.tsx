import { BlockTitle, Button, Card, Navbar, Page } from "ina-ui/react";
import Link from "next/link";
import { InaLib } from "ina-digital-sdk";

export default function Home() {
  const inaLib = new InaLib({ mode: "dev", secret_key: "your_secret_key" });
  return (
    <Page>
      <Navbar title="My App" />
      <BlockTitle withBlock={false}>Navigation</BlockTitle>
      <div className="grid grid-cols-2 lg:grid-cols-4 ">
        <a href="https://docs-ina-digital.govtechindonesia.id/v1/microsites/ui/memulai" target="_blank">
          <Card outline>
            <div className="flex justify-center">
              <div className="text-center">
                <img src={(process.env.BASE_PATH != null ? process.env.BASE_PATH : '') + "/ic-docs.png"} className="w-24 h-24" />
                <p className="mt-4 text-xl font-bold block">UI Docs</p>
              </div>
            </div>
          </Card>
        </a>
        <a href="https://docs-ina-digital.govtechindonesia.id/v1/microsites/sdk/memulai" target="_blank">
          <Card outline>
            <div className="flex justify-center">
              <div className="text-center">
                <img src={(process.env.BASE_PATH != null ? process.env.BASE_PATH : '') + "/ic-smile.png"} className="w-24 h-24" />
                <p className="mt-4 text-xl font-bold block">SDK Lib</p>
              </div>
            </div>
          </Card>
        </a>
        <Link href="/profile">
          <Card outline>
            <div className="flex justify-center">
              <div className="text-center">
                <img src={(process.env.BASE_PATH != null ? process.env.BASE_PATH : '') + "/ic-profile.png"} className="w-24 h-24 " />
                <p className="mt-4 text-xl font-bold block">Profile</p>
              </div>
            </div>
          </Card>
        </Link>
        <Link href="/about">
          <Card outline>
            <div className="flex justify-center">
              <div className="text-center">
                <img src={(process.env.BASE_PATH != null ? process.env.BASE_PATH : '') + "/ic-info.png"} className="w-24 h-24" />
                <p className="mt-4 text-xl font-bold block">About</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </Page>
  );
}
