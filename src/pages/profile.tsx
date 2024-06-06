import { Card, Navbar, NavbarBackLink, Page } from "ina-ui/react";
import { useRouter } from "next/router";
import { InaLib } from "ina-digital-sdk";
import { useEffect, useState } from "react";

export default function PageProfile(): JSX.Element {
  const router = useRouter();
  const inaLib = new InaLib({ mode: "dev", secret_key: "your_secret_key" });
  const [user, setUser] = useState<any>();

  useEffect(() => {
    inaLib
      .GetUserDetail()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return (
    <Page>
      <Navbar
      left={
        <NavbarBackLink onClick={() => router.back()} />
      }
      title="Profile">
      </Navbar>
      {!user && (
        <Card>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Card>
      )}
      {user && (
        <Card header={user.name}>
          <div className="flex justify-center">
            <div className="text-center">
              <Card
                style={{
                  borderRadius: "50%",
                  backgroundColor: "grey",
                  maxWidth: "200px",
                  maxHeight: "200px",
                  height: "100px",
                  width: "100px",
                }}
              >
                <img src={process.env.BASE_PATH + "/ic-smile.png"} />
              </Card>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center">
              <p className="mt-4 text-xl block">Bio: {user.bio}</p>
              <p className="mt-4 text-xl block">
                Jenis Kelamin: {user.jenis_kelamin}
              </p>
              <p className="mt-4 text-xl block">Email: {user.email}</p>
              <p className="mt-4 text-xl block">Phone: 0890XXXXXX</p>
              <p className="mt-4 text-xl block">NIK: 31710XXXXXXXXXXX</p>
            </div>
          </div>
        </Card>
      )}
    </Page>
  );
}
